-- AlterTable
ALTER TABLE "Channel" ADD COLUMN "eventId" TEXT;
-- AddForeignKey
ALTER TABLE "Channel" ADD CONSTRAINT "Channel_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

