-- AddForeignKey
ALTER TABLE "ChannelParticipant" ADD CONSTRAINT "ChannelParticipant_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
