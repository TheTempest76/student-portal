/*
  Warnings:

  - You are about to drop the column `accomplishments` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Student` table. All the data in the column will be lost.
  - Added the required column `Branch` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Fname` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Semester` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Student_email_key";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "accomplishments",
DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "Branch" TEXT NOT NULL,
ADD COLUMN     "Fname" TEXT NOT NULL,
ADD COLUMN     "Semester" INTEGER NOT NULL,
ADD COLUMN     "academicAccomplishments" TEXT,
ADD COLUMN     "sportsAccomplishments" TEXT;
