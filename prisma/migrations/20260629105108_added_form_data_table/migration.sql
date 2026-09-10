-- CreateTable
CREATE TABLE "FormData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "FormData_pkey" PRIMARY KEY ("id")
);
