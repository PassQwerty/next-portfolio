-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "img" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "allDescription" TEXT NOT NULL,
    "tags" TEXT[],
    "source" TEXT NOT NULL,
    "demo" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
