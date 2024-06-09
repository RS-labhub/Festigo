-- DropForeignKey
ALTER TABLE "Vendor" DROP CONSTRAINT "Vendor_eventId_fkey";

-- CreateTable
CREATE TABLE "_EventToVendor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToVendor_AB_unique" ON "_EventToVendor"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToVendor_B_index" ON "_EventToVendor"("B");

-- AddForeignKey
ALTER TABLE "_EventToVendor" ADD CONSTRAINT "_EventToVendor_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToVendor" ADD CONSTRAINT "_EventToVendor_B_fkey" FOREIGN KEY ("B") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
