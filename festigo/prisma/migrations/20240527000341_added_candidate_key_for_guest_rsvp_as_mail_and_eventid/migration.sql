/*
  Warnings:

  - A unique constraint covering the columns `[email,eventId]` on the table `Guest_RSVP` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Guest_RSVP_phone_eventId_key";

-- DropIndex
DROP INDEX "Guest_RSVP_phone_key";

-- CreateIndex
CREATE UNIQUE INDEX "Guest_RSVP_email_eventId_key" ON "Guest_RSVP"("email", "eventId");
