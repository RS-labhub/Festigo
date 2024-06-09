/*
  Warnings:

  - Made the column `eventId` on table `Channel` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Channel" DROP CONSTRAINT "Channel_eventId_fkey";

-- AlterTable
ALTER TABLE "Channel" ALTER COLUMN "eventId" SET NOT NULL;
