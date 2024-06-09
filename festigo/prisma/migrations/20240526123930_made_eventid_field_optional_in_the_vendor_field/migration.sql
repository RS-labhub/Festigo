-- DropForeignKey
ALTER TABLE "Vendor" DROP CONSTRAINT "Vendor_eventId_fkey";

-- AlterTable
ALTER TABLE "Vendor" ALTER COLUMN "eventId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
