import * as Typegen from 'nexus-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
  take?: boolean
  skip?: boolean
  cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  Image: Prisma.Image
  Thumbnail: Prisma.Thumbnail
  Mentor: Prisma.Mentor
  UserResumeToken: Prisma.UserResumeToken
  UserLoginToken: Prisma.UserLoginToken
  HackerType: Prisma.HackerType
  HackerSkill: Prisma.HackerSkill
  HackerTopic: Prisma.HackerTopic
  UserRole: Prisma.UserRole
  Challenge: Prisma.Challenge
  TeamChallengeVote: Prisma.TeamChallengeVote
  Team: Prisma.Team
  User: Prisma.User
  Schedule: Prisma.Schedule
  Project: Prisma.Project
  Submission: Prisma.Submission
  SubmissionChallenge: Prisma.SubmissionChallenge
  SubmissionUser: Prisma.SubmissionUser
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    images: {
      filtering: 'id' | 'base64' | 'projectId' | 'AND' | 'OR' | 'NOT' | 'user' | 'project'
      ordering: 'id' | 'base64' | 'projectId'
    }
    thumbnails: {
      filtering: 'id' | 'base64' | 'Project' | 'AND' | 'OR' | 'NOT'
      ordering: 'id' | 'base64'
    }
    mentors: {
      filtering: 'id' | 'email' | 'name' | 'skills' | 'linkedin' | 'languages' | 'topics' | 'AND' | 'OR' | 'NOT'
      ordering: 'id' | 'email' | 'name' | 'skills' | 'linkedin' | 'languages'
    }
    userResumeTokens: {
      filtering: 'id' | 'hashedToken' | 'created' | 'userId' | 'AND' | 'OR' | 'NOT' | 'user'
      ordering: 'id' | 'hashedToken' | 'created' | 'userId'
    }
    userLoginTokens: {
      filtering: 'id' | 'hashedToken' | 'created' | 'userId' | 'AND' | 'OR' | 'NOT' | 'user'
      ordering: 'id' | 'hashedToken' | 'created' | 'userId'
    }
    hackerTypes: {
      filtering: 'id' | 'title' | 'description' | 'users' | 'AND' | 'OR' | 'NOT'
      ordering: 'id' | 'title' | 'description'
    }
    hackerSkills: {
      filtering: 'id' | 'title' | 'description' | 'users' | 'AND' | 'OR' | 'NOT'
      ordering: 'id' | 'title' | 'description'
    }
    hackerTopics: {
      filtering: 'id' | 'title' | 'description' | 'users' | 'primaryChallenges' | 'mentors' | 'teams' | 'slackId' | 'AND' | 'OR' | 'NOT'
      ordering: 'id' | 'title' | 'description' | 'slackId'
    }
    userRoles: {
      filtering: 'id' | 'users' | 'AND' | 'OR' | 'NOT'
      ordering: 'id'
    }
    challenges: {
      filtering: 'id' | 'title' | 'context' | 'challenge' | 'solution' | 'resources' | 'commentsByTeam' | 'organization' | 'contactName' | 'contactEmail' | 'teamsThatCanSelectThisChallenge' | 'teamsThatSelectedThisChallenge' | 'projects' | 'primaryTopicId' | 'teamChallengeVotes' | 'usersThatPreferThisChallenge' | 'AND' | 'OR' | 'NOT' | 'primaryTopic'
      ordering: 'id' | 'title' | 'context' | 'challenge' | 'solution' | 'resources' | 'commentsByTeam' | 'organization' | 'contactName' | 'contactEmail' | 'primaryTopicId'
    }
    teamChallengeVotes: {
      filtering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score' | 'AND' | 'OR' | 'NOT' | 'user' | 'challenge' | 'team'
      ordering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score'
    }
    teams: {
      filtering: 'id' | 'challengesToSelect' | 'members' | 'challengeSelectedId' | 'projects' | 'slackId' | 'challengeVotes' | 'primaryTopicId' | 'AND' | 'OR' | 'NOT' | 'challengeSelected' | 'primaryTopic'
      ordering: 'id' | 'challengeSelectedId' | 'slackId' | 'primaryTopicId'
    }
    users: {
      filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
      ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
    }
    schedules: {
      filtering: 'id' | 'from' | 'to' | 'title' | 'type' | 'data' | 'color' | 'AND' | 'OR' | 'NOT'
      ordering: 'id' | 'from' | 'to' | 'title' | 'type' | 'data' | 'color'
    }
    projects: {
      filtering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'images' | 'challengeId' | 'teamId' | 'isPublished' | 'AND' | 'OR' | 'NOT' | 'thumbnail' | 'challenge' | 'team'
      ordering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'challengeId' | 'teamId' | 'isPublished'
    }
    submissions: {
      filtering: 'id' | 'title' | 'url' | 'tagline' | 'createdAt' | 'description' | 'video' | 'website' | 'file' | 'desiredPrizes' | 'builtWith' | 'slackChannel' | 'relevanceForEco' | 'relevanceForChallenge' | 'potentialForImpact' | 'progressAchieved' | 'projectAddedValue' | 'projectContinuation' | 'projectPlans' | 'teamMembersScreen' | 'collegeUniversitiesOfTeamMembers' | 'additionalTeamMemberCount' | 'challengeId' | 'submitterEmail' | 'teamMembers' | 'AND' | 'OR' | 'NOT' | 'challenge'
      ordering: 'id' | 'title' | 'url' | 'tagline' | 'createdAt' | 'description' | 'video' | 'website' | 'file' | 'desiredPrizes' | 'builtWith' | 'slackChannel' | 'relevanceForEco' | 'relevanceForChallenge' | 'potentialForImpact' | 'progressAchieved' | 'projectAddedValue' | 'projectContinuation' | 'projectPlans' | 'teamMembersScreen' | 'collegeUniversitiesOfTeamMembers' | 'additionalTeamMemberCount' | 'challengeId' | 'submitterEmail'
    }
    submissionChallenges: {
      filtering: 'id' | 'title' | 'description' | 'topic' | 'AND' | 'OR' | 'NOT' | 'submission'
      ordering: 'id' | 'title' | 'description' | 'topic'
    }
    submissionUsers: {
      filtering: 'id' | 'email' | 'firstName' | 'lastName' | 'screenName' | 'submissions' | 'AND' | 'OR' | 'NOT'
      ordering: 'id' | 'email' | 'firstName' | 'lastName' | 'screenName'
    }
  },
  Image: {

  }
  Thumbnail: {
    Project: {
      filtering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'images' | 'challengeId' | 'teamId' | 'isPublished' | 'AND' | 'OR' | 'NOT' | 'thumbnail' | 'challenge' | 'team'
      ordering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'challengeId' | 'teamId' | 'isPublished'
    }
  }
  Mentor: {
    topics: {
      filtering: 'id' | 'title' | 'description' | 'users' | 'primaryChallenges' | 'mentors' | 'teams' | 'slackId' | 'AND' | 'OR' | 'NOT'
      ordering: 'id' | 'title' | 'description' | 'slackId'
    }
  }
  UserResumeToken: {

  }
  UserLoginToken: {

  }
  HackerType: {
    users: {
      filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
      ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
    }
  }
  HackerSkill: {
    users: {
      filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
      ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
    }
  }
  HackerTopic: {
    users: {
      filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
      ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
    }
    primaryChallenges: {
      filtering: 'id' | 'title' | 'context' | 'challenge' | 'solution' | 'resources' | 'commentsByTeam' | 'organization' | 'contactName' | 'contactEmail' | 'teamsThatCanSelectThisChallenge' | 'teamsThatSelectedThisChallenge' | 'projects' | 'primaryTopicId' | 'teamChallengeVotes' | 'usersThatPreferThisChallenge' | 'AND' | 'OR' | 'NOT' | 'primaryTopic'
      ordering: 'id' | 'title' | 'context' | 'challenge' | 'solution' | 'resources' | 'commentsByTeam' | 'organization' | 'contactName' | 'contactEmail' | 'primaryTopicId'
    }
    mentors: {
      filtering: 'id' | 'email' | 'name' | 'skills' | 'linkedin' | 'languages' | 'topics' | 'AND' | 'OR' | 'NOT'
      ordering: 'id' | 'email' | 'name' | 'skills' | 'linkedin' | 'languages'
    }
    teams: {
      filtering: 'id' | 'challengesToSelect' | 'members' | 'challengeSelectedId' | 'projects' | 'slackId' | 'challengeVotes' | 'primaryTopicId' | 'AND' | 'OR' | 'NOT' | 'challengeSelected' | 'primaryTopic'
      ordering: 'id' | 'challengeSelectedId' | 'slackId' | 'primaryTopicId'
    }
  }
  UserRole: {
    users: {
      filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
      ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
    }
  }
  Challenge: {
    teamsThatCanSelectThisChallenge: {
      filtering: 'id' | 'challengesToSelect' | 'members' | 'challengeSelectedId' | 'projects' | 'slackId' | 'challengeVotes' | 'primaryTopicId' | 'AND' | 'OR' | 'NOT' | 'challengeSelected' | 'primaryTopic'
      ordering: 'id' | 'challengeSelectedId' | 'slackId' | 'primaryTopicId'
    }
    teamsThatSelectedThisChallenge: {
      filtering: 'id' | 'challengesToSelect' | 'members' | 'challengeSelectedId' | 'projects' | 'slackId' | 'challengeVotes' | 'primaryTopicId' | 'AND' | 'OR' | 'NOT' | 'challengeSelected' | 'primaryTopic'
      ordering: 'id' | 'challengeSelectedId' | 'slackId' | 'primaryTopicId'
    }
    projects: {
      filtering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'images' | 'challengeId' | 'teamId' | 'isPublished' | 'AND' | 'OR' | 'NOT' | 'thumbnail' | 'challenge' | 'team'
      ordering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'challengeId' | 'teamId' | 'isPublished'
    }
    teamChallengeVotes: {
      filtering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score' | 'AND' | 'OR' | 'NOT' | 'user' | 'challenge' | 'team'
      ordering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score'
    }
    usersThatPreferThisChallenge: {
      filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
      ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
    }
  }
  TeamChallengeVote: {

  }
  Team: {
    challengesToSelect: {
      filtering: 'id' | 'title' | 'context' | 'challenge' | 'solution' | 'resources' | 'commentsByTeam' | 'organization' | 'contactName' | 'contactEmail' | 'teamsThatCanSelectThisChallenge' | 'teamsThatSelectedThisChallenge' | 'projects' | 'primaryTopicId' | 'teamChallengeVotes' | 'usersThatPreferThisChallenge' | 'AND' | 'OR' | 'NOT' | 'primaryTopic'
      ordering: 'id' | 'title' | 'context' | 'challenge' | 'solution' | 'resources' | 'commentsByTeam' | 'organization' | 'contactName' | 'contactEmail' | 'primaryTopicId'
    }
    members: {
      filtering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'hackerTypes' | 'hackerSkills' | 'hackerTopics' | 'roles' | 'loginTokens' | 'resumeTokens' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'teamChallengeVotes' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId' | 'AND' | 'OR' | 'NOT' | 'profilePhoto' | 'team' | 'preferredChallenge'
      ordering: 'id' | 'firstname' | 'lastname' | 'profilePhotoId' | 'email' | 'emailConfirmed' | 'phoneNumber' | 'city' | 'possibleTeamMemberEmails' | 'participateInTeamBuildingSession' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'teamId' | 'devpostUrl' | 'isAnonymized' | 'preferredChallengeId'
    }
    projects: {
      filtering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'images' | 'challengeId' | 'teamId' | 'isPublished' | 'AND' | 'OR' | 'NOT' | 'thumbnail' | 'challenge' | 'team'
      ordering: 'id' | 'title' | 'tagline' | 'thumbnailId' | 'description' | 'technologiesUsed' | 'obstacles' | 'accomplishments' | 'learnings' | 'nextSteps' | 'videoUrl' | 'relevanceToHackathon' | 'relevanceToChallenge' | 'longTermImpact' | 'progressDuringHackathon' | 'valueAdded' | 'challengeId' | 'teamId' | 'isPublished'
    }
    challengeVotes: {
      filtering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score' | 'AND' | 'OR' | 'NOT' | 'user' | 'challenge' | 'team'
      ordering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score'
    }
  }
  User: {
    hackerTypes: {
      filtering: 'id' | 'title' | 'description' | 'users' | 'AND' | 'OR' | 'NOT'
      ordering: 'id' | 'title' | 'description'
    }
    hackerSkills: {
      filtering: 'id' | 'title' | 'description' | 'users' | 'AND' | 'OR' | 'NOT'
      ordering: 'id' | 'title' | 'description'
    }
    hackerTopics: {
      filtering: 'id' | 'title' | 'description' | 'users' | 'primaryChallenges' | 'mentors' | 'teams' | 'slackId' | 'AND' | 'OR' | 'NOT'
      ordering: 'id' | 'title' | 'description' | 'slackId'
    }
    roles: {
      filtering: 'id' | 'users' | 'AND' | 'OR' | 'NOT'
      ordering: 'id'
    }
    loginTokens: {
      filtering: 'id' | 'hashedToken' | 'created' | 'userId' | 'AND' | 'OR' | 'NOT' | 'user'
      ordering: 'id' | 'hashedToken' | 'created' | 'userId'
    }
    resumeTokens: {
      filtering: 'id' | 'hashedToken' | 'created' | 'userId' | 'AND' | 'OR' | 'NOT' | 'user'
      ordering: 'id' | 'hashedToken' | 'created' | 'userId'
    }
    teamChallengeVotes: {
      filtering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score' | 'AND' | 'OR' | 'NOT' | 'user' | 'challenge' | 'team'
      ordering: 'id' | 'userId' | 'challengeId' | 'teamId' | 'score'
    }
  }
  Schedule: {

  }
  Project: {
    images: {
      filtering: 'id' | 'base64' | 'projectId' | 'AND' | 'OR' | 'NOT' | 'user' | 'project'
      ordering: 'id' | 'base64' | 'projectId'
    }
  }
  Submission: {
    teamMembers: {
      filtering: 'id' | 'email' | 'firstName' | 'lastName' | 'screenName' | 'submissions' | 'AND' | 'OR' | 'NOT'
      ordering: 'id' | 'email' | 'firstName' | 'lastName' | 'screenName'
    }
  }
  SubmissionChallenge: {

  }
  SubmissionUser: {
    submissions: {
      filtering: 'id' | 'title' | 'url' | 'tagline' | 'createdAt' | 'description' | 'video' | 'website' | 'file' | 'desiredPrizes' | 'builtWith' | 'slackChannel' | 'relevanceForEco' | 'relevanceForChallenge' | 'potentialForImpact' | 'progressAchieved' | 'projectAddedValue' | 'projectContinuation' | 'projectPlans' | 'teamMembersScreen' | 'collegeUniversitiesOfTeamMembers' | 'additionalTeamMemberCount' | 'challengeId' | 'submitterEmail' | 'teamMembers' | 'AND' | 'OR' | 'NOT' | 'challenge'
      ordering: 'id' | 'title' | 'url' | 'tagline' | 'createdAt' | 'description' | 'video' | 'website' | 'file' | 'desiredPrizes' | 'builtWith' | 'slackChannel' | 'relevanceForEco' | 'relevanceForChallenge' | 'potentialForImpact' | 'progressAchieved' | 'projectAddedValue' | 'projectContinuation' | 'projectPlans' | 'teamMembersScreen' | 'collegeUniversitiesOfTeamMembers' | 'additionalTeamMemberCount' | 'challengeId' | 'submitterEmail'
    }
  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    image: 'Image'
    images: 'Image'
    thumbnail: 'Thumbnail'
    thumbnails: 'Thumbnail'
    mentor: 'Mentor'
    mentors: 'Mentor'
    userResumeToken: 'UserResumeToken'
    userResumeTokens: 'UserResumeToken'
    userLoginToken: 'UserLoginToken'
    userLoginTokens: 'UserLoginToken'
    hackerType: 'HackerType'
    hackerTypes: 'HackerType'
    hackerSkill: 'HackerSkill'
    hackerSkills: 'HackerSkill'
    hackerTopic: 'HackerTopic'
    hackerTopics: 'HackerTopic'
    userRole: 'UserRole'
    userRoles: 'UserRole'
    challenge: 'Challenge'
    challenges: 'Challenge'
    teamChallengeVote: 'TeamChallengeVote'
    teamChallengeVotes: 'TeamChallengeVote'
    team: 'Team'
    teams: 'Team'
    user: 'User'
    users: 'User'
    schedule: 'Schedule'
    schedules: 'Schedule'
    project: 'Project'
    projects: 'Project'
    submission: 'Submission'
    submissions: 'Submission'
    submissionChallenge: 'SubmissionChallenge'
    submissionChallenges: 'SubmissionChallenge'
    submissionUser: 'SubmissionUser'
    submissionUsers: 'SubmissionUser'
  },
  Mutation: {
    createOneImage: 'Image'
    updateOneImage: 'Image'
    updateManyImage: 'BatchPayload'
    deleteOneImage: 'Image'
    deleteManyImage: 'BatchPayload'
    upsertOneImage: 'Image'
    createOneThumbnail: 'Thumbnail'
    updateOneThumbnail: 'Thumbnail'
    updateManyThumbnail: 'BatchPayload'
    deleteOneThumbnail: 'Thumbnail'
    deleteManyThumbnail: 'BatchPayload'
    upsertOneThumbnail: 'Thumbnail'
    createOneMentor: 'Mentor'
    updateOneMentor: 'Mentor'
    updateManyMentor: 'BatchPayload'
    deleteOneMentor: 'Mentor'
    deleteManyMentor: 'BatchPayload'
    upsertOneMentor: 'Mentor'
    createOneUserResumeToken: 'UserResumeToken'
    updateOneUserResumeToken: 'UserResumeToken'
    updateManyUserResumeToken: 'BatchPayload'
    deleteOneUserResumeToken: 'UserResumeToken'
    deleteManyUserResumeToken: 'BatchPayload'
    upsertOneUserResumeToken: 'UserResumeToken'
    createOneUserLoginToken: 'UserLoginToken'
    updateOneUserLoginToken: 'UserLoginToken'
    updateManyUserLoginToken: 'BatchPayload'
    deleteOneUserLoginToken: 'UserLoginToken'
    deleteManyUserLoginToken: 'BatchPayload'
    upsertOneUserLoginToken: 'UserLoginToken'
    createOneHackerType: 'HackerType'
    updateOneHackerType: 'HackerType'
    updateManyHackerType: 'BatchPayload'
    deleteOneHackerType: 'HackerType'
    deleteManyHackerType: 'BatchPayload'
    upsertOneHackerType: 'HackerType'
    createOneHackerSkill: 'HackerSkill'
    updateOneHackerSkill: 'HackerSkill'
    updateManyHackerSkill: 'BatchPayload'
    deleteOneHackerSkill: 'HackerSkill'
    deleteManyHackerSkill: 'BatchPayload'
    upsertOneHackerSkill: 'HackerSkill'
    createOneHackerTopic: 'HackerTopic'
    updateOneHackerTopic: 'HackerTopic'
    updateManyHackerTopic: 'BatchPayload'
    deleteOneHackerTopic: 'HackerTopic'
    deleteManyHackerTopic: 'BatchPayload'
    upsertOneHackerTopic: 'HackerTopic'
    createOneUserRole: 'UserRole'
    updateOneUserRole: 'UserRole'
    updateManyUserRole: 'BatchPayload'
    deleteOneUserRole: 'UserRole'
    deleteManyUserRole: 'BatchPayload'
    upsertOneUserRole: 'UserRole'
    createOneChallenge: 'Challenge'
    updateOneChallenge: 'Challenge'
    updateManyChallenge: 'BatchPayload'
    deleteOneChallenge: 'Challenge'
    deleteManyChallenge: 'BatchPayload'
    upsertOneChallenge: 'Challenge'
    createOneTeamChallengeVote: 'TeamChallengeVote'
    updateOneTeamChallengeVote: 'TeamChallengeVote'
    updateManyTeamChallengeVote: 'BatchPayload'
    deleteOneTeamChallengeVote: 'TeamChallengeVote'
    deleteManyTeamChallengeVote: 'BatchPayload'
    upsertOneTeamChallengeVote: 'TeamChallengeVote'
    createOneTeam: 'Team'
    updateOneTeam: 'Team'
    updateManyTeam: 'BatchPayload'
    deleteOneTeam: 'Team'
    deleteManyTeam: 'BatchPayload'
    upsertOneTeam: 'Team'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'BatchPayload'
    deleteOneUser: 'User'
    deleteManyUser: 'BatchPayload'
    upsertOneUser: 'User'
    createOneSchedule: 'Schedule'
    updateOneSchedule: 'Schedule'
    updateManySchedule: 'BatchPayload'
    deleteOneSchedule: 'Schedule'
    deleteManySchedule: 'BatchPayload'
    upsertOneSchedule: 'Schedule'
    createOneProject: 'Project'
    updateOneProject: 'Project'
    updateManyProject: 'BatchPayload'
    deleteOneProject: 'Project'
    deleteManyProject: 'BatchPayload'
    upsertOneProject: 'Project'
    createOneSubmission: 'Submission'
    updateOneSubmission: 'Submission'
    updateManySubmission: 'BatchPayload'
    deleteOneSubmission: 'Submission'
    deleteManySubmission: 'BatchPayload'
    upsertOneSubmission: 'Submission'
    createOneSubmissionChallenge: 'SubmissionChallenge'
    updateOneSubmissionChallenge: 'SubmissionChallenge'
    updateManySubmissionChallenge: 'BatchPayload'
    deleteOneSubmissionChallenge: 'SubmissionChallenge'
    deleteManySubmissionChallenge: 'BatchPayload'
    upsertOneSubmissionChallenge: 'SubmissionChallenge'
    createOneSubmissionUser: 'SubmissionUser'
    updateOneSubmissionUser: 'SubmissionUser'
    updateManySubmissionUser: 'BatchPayload'
    deleteOneSubmissionUser: 'SubmissionUser'
    deleteManySubmissionUser: 'BatchPayload'
    upsertOneSubmissionUser: 'SubmissionUser'
  },
  Image: {
    id: 'String'
    base64: 'String'
    user: 'User'
    project: 'Project'
    projectId: 'String'
  }
  Thumbnail: {
    id: 'String'
    base64: 'String'
    Project: 'Project'
  }
  Mentor: {
    id: 'String'
    email: 'String'
    name: 'String'
    skills: 'String'
    linkedin: 'String'
    languages: 'String'
    topics: 'HackerTopic'
  }
  UserResumeToken: {
    id: 'String'
    hashedToken: 'String'
    created: 'DateTime'
    userId: 'String'
    user: 'User'
  }
  UserLoginToken: {
    id: 'String'
    hashedToken: 'String'
    created: 'DateTime'
    userId: 'String'
    user: 'User'
  }
  HackerType: {
    id: 'String'
    title: 'String'
    description: 'String'
    users: 'User'
  }
  HackerSkill: {
    id: 'String'
    title: 'String'
    description: 'String'
    users: 'User'
  }
  HackerTopic: {
    id: 'String'
    title: 'String'
    description: 'String'
    users: 'User'
    primaryChallenges: 'Challenge'
    mentors: 'Mentor'
    teams: 'Team'
    slackId: 'String'
  }
  UserRole: {
    id: 'String'
    users: 'User'
  }
  Challenge: {
    id: 'String'
    title: 'String'
    context: 'String'
    challenge: 'String'
    solution: 'String'
    resources: 'String'
    commentsByTeam: 'String'
    organization: 'String'
    contactName: 'String'
    contactEmail: 'String'
    teamsThatCanSelectThisChallenge: 'Team'
    teamsThatSelectedThisChallenge: 'Team'
    projects: 'Project'
    primaryTopicId: 'String'
    primaryTopic: 'HackerTopic'
    teamChallengeVotes: 'TeamChallengeVote'
    usersThatPreferThisChallenge: 'User'
  }
  TeamChallengeVote: {
    id: 'String'
    userId: 'String'
    user: 'User'
    challengeId: 'String'
    challenge: 'Challenge'
    teamId: 'String'
    team: 'Team'
    score: 'Int'
  }
  Team: {
    id: 'String'
    challengesToSelect: 'Challenge'
    members: 'User'
    challengeSelectedId: 'String'
    challengeSelected: 'Challenge'
    projects: 'Project'
    slackId: 'String'
    challengeVotes: 'TeamChallengeVote'
    primaryTopicId: 'String'
    primaryTopic: 'HackerTopic'
    tags: 'String'
  }
  User: {
    id: 'String'
    firstname: 'String'
    lastname: 'String'
    profilePhotoId: 'String'
    profilePhoto: 'Image'
    email: 'String'
    emailConfirmed: 'Boolean'
    phoneNumber: 'String'
    languages: 'String'
    city: 'String'
    hackerTypes: 'HackerType'
    hackerSkills: 'HackerSkill'
    hackerTopics: 'HackerTopic'
    roles: 'UserRole'
    loginTokens: 'UserLoginToken'
    resumeTokens: 'UserResumeToken'
    possibleTeamMemberEmails: 'String'
    participateInTeamBuildingSession: 'Boolean'
    linkedin: 'String'
    instagram: 'String'
    facebook: 'String'
    twitter: 'String'
    teamId: 'String'
    team: 'Team'
    teamChallengeVotes: 'TeamChallengeVote'
    devpostUrl: 'String'
    isAnonymized: 'Boolean'
    preferredChallengeId: 'String'
    preferredChallenge: 'Challenge'
  }
  Schedule: {
    id: 'String'
    from: 'DateTime'
    to: 'DateTime'
    title: 'String'
    type: 'ScheduleType'
    data: 'String'
    color: 'String'
  }
  Project: {
    id: 'String'
    title: 'String'
    tagline: 'String'
    thumbnailId: 'String'
    thumbnail: 'Thumbnail'
    description: 'String'
    technologiesUsed: 'String'
    obstacles: 'String'
    accomplishments: 'String'
    learnings: 'String'
    nextSteps: 'String'
    videoUrl: 'String'
    urls: 'String'
    relevanceToHackathon: 'String'
    relevanceToChallenge: 'String'
    longTermImpact: 'String'
    progressDuringHackathon: 'String'
    valueAdded: 'String'
    images: 'Image'
    challenge: 'Challenge'
    challengeId: 'String'
    team: 'Team'
    teamId: 'String'
    isPublished: 'Boolean'
  }
  Submission: {
    id: 'String'
    title: 'String'
    url: 'String'
    tagline: 'String'
    createdAt: 'DateTime'
    description: 'String'
    video: 'String'
    website: 'String'
    file: 'String'
    desiredPrizes: 'String'
    builtWith: 'String'
    slackChannel: 'String'
    relevanceForEco: 'String'
    relevanceForChallenge: 'String'
    potentialForImpact: 'String'
    progressAchieved: 'String'
    projectAddedValue: 'String'
    projectContinuation: 'String'
    projectPlans: 'String'
    teamMembersScreen: 'String'
    collegeUniversitiesOfTeamMembers: 'String'
    additionalTeamMemberCount: 'Int'
    challengeId: 'String'
    challenge: 'SubmissionChallenge'
    submitterEmail: 'String'
    teamMembers: 'SubmissionUser'
  }
  SubmissionChallenge: {
    id: 'String'
    title: 'String'
    description: 'String'
    topic: 'String'
    submission: 'Submission'
  }
  SubmissionUser: {
    id: 'String'
    email: 'String'
    firstName: 'String'
    lastName: 'String'
    screenName: 'String'
    submissions: 'Submission'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Image: Typegen.NexusPrismaFields<'Image'>
  Thumbnail: Typegen.NexusPrismaFields<'Thumbnail'>
  Mentor: Typegen.NexusPrismaFields<'Mentor'>
  UserResumeToken: Typegen.NexusPrismaFields<'UserResumeToken'>
  UserLoginToken: Typegen.NexusPrismaFields<'UserLoginToken'>
  HackerType: Typegen.NexusPrismaFields<'HackerType'>
  HackerSkill: Typegen.NexusPrismaFields<'HackerSkill'>
  HackerTopic: Typegen.NexusPrismaFields<'HackerTopic'>
  UserRole: Typegen.NexusPrismaFields<'UserRole'>
  Challenge: Typegen.NexusPrismaFields<'Challenge'>
  TeamChallengeVote: Typegen.NexusPrismaFields<'TeamChallengeVote'>
  Team: Typegen.NexusPrismaFields<'Team'>
  User: Typegen.NexusPrismaFields<'User'>
  Schedule: Typegen.NexusPrismaFields<'Schedule'>
  Project: Typegen.NexusPrismaFields<'Project'>
  Submission: Typegen.NexusPrismaFields<'Submission'>
  SubmissionChallenge: Typegen.NexusPrismaFields<'SubmissionChallenge'>
  SubmissionUser: Typegen.NexusPrismaFields<'SubmissionUser'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  