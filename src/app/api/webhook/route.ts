/* eslint-disable camelcase */
import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createUser, deleteUser, updateUser } from "@/lib/actions/user.action";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("Webhook POST endpoint POCZĄTEK WYWOŁANIA");
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  // TODO: Add your webbhook secret to .env.local
  const WEBHOOK_SECRET = process.env.NEXT_CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error("Missing webhook secret")
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");
  console.log("Headers:", { svix_id, svix_timestamp, svix_signature });

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  console.log("Payload:", payload);
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
    console.log("Webhook event verified:", evt);
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const eventType = evt.type;
  console.log("Event type:", eventType);

  if (eventType === "user.created") {

    const { id, username } = evt.data;
    console.log("Creating user:", { id, username });


    // create a new user in your database
    const user = await createUser({
      clerkUserId: id!,
      username: username || null,
      // email: email_addresses[0].email_address,
    });
    console.log("User created:", user);
    return NextResponse.json({ message: "OK", user });
  }

  if (eventType === "user.updated") {
    const { id: clerkUserId, username } = evt.data;
    console.log("Updating user:", { clerkUserId, username });

    // create a new user in your database
    const user = await updateUser({
      clerkUserId,
      username: username || null, // Obsługa null dla username
      // email: email_addresses[0].email_address,
    });
    console.log("User updated:", user);
    return NextResponse.json({ message: "OK", user });
  }

  if (eventType === "user.deleted") {
    const { id: clerkUserId } = evt.data;
    console.log("Deleting user:", { clerkUserId });

    const deletedUser = await deleteUser({
      clerkUserId
    });
    console.log("User deleted:", deletedUser);
    return NextResponse.json({ message: "OK", user: deletedUser });
  }
  console.log("No matching event type");
  return NextResponse.json({ message: "OK" });
}
