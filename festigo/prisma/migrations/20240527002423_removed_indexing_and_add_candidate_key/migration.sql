/*
  Warnings:

  - The primary key for the `Guest_RSVP` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Guest_RSVP` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Guest_RSVP_email_eventId_key";

-- AlterTable
ALTER TABLE "Guest_RSVP" DROP CONSTRAINT "Guest_RSVP_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Guest_RSVP_pkey" PRIMARY KEY ("email", "eventId");
