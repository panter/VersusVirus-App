# Migration `20200518161155-make-stuff-optional`

This migration has been generated by Marco Wettstein at 5/18/2020, 4:11:55 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."UserLoginToken" ALTER COLUMN "hashedToken" DROP DEFAULT;

ALTER TABLE "public"."UserResumeToken" ALTER COLUMN "hashedToken" DROP DEFAULT;

CREATE UNIQUE INDEX "Submission_challengeId" ON "public"."Submission"("challengeId")

ALTER TABLE "public"."Image" ADD FOREIGN KEY ("projectId")REFERENCES "public"."Project"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Submission" ADD FOREIGN KEY ("challengeId")REFERENCES "public"."SubmissionChallenge"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER INDEX "public"."TeamChallengeVote.user_challenge_team" RENAME TO "TeamChallengeVote.userId_challengeId_teamId"

ALTER INDEX "public"."User_profilePhoto" RENAME TO "User_profilePhotoId"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200514215239-prisma-beta-initial..20200518161155-make-stuff-optional
--- datamodel.dml
+++ datamodel.dml
@@ -3,16 +3,16 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("POSTGRESQL_URL")
 }
 model Image {
   id        String   @default(uuid()) @id
   base64    String
-  user      User
-  Project   Project? @relation(fields: [projectId], references: [id])
+  user      User?
+  project   Project? @relation(fields: [projectId], references: [id])
   projectId String?
 }
 model Thumbnail {
@@ -34,18 +34,18 @@
 model UserResumeToken {
   id          String   @default(uuid()) @id
   hashedToken String   @unique
   created     DateTime @default(now())
-  userId      String
-  user        User     @relation(fields: [userId], references: [id])
+  userId      String?
+  user        User?    @relation(fields: [userId], references: [id])
 }
 model UserLoginToken {
   id          String   @default(uuid()) @id
   hashedToken String   @unique
   created     DateTime @default(now())
-  userId      String
-  user        User     @relation(fields: [userId], references: [id])
+  userId      String?
+  user        User?    @relation(fields: [userId], references: [id])
 }
 model HackerType {
   id          String @id
```


