import mongoose from "mongoose";

const parameters = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true,
    },
    extreamEmotion: {
      type: [
        {
          type: String,
          enum: ["love", "anger and frustration", "anxity", "depression"],
          unique: true,
        },
      ],
    },
    persontype: {
      type: [
        {
          type: String,
          enum: ["sensitive", "aspirational", "sheilded", "calm and quiet"],
          unique: true,
        },
      ],
    },
    statisfation: {
      type: String,
      enum: [
        "satisfied",
        "stable enough",
        "feel like i am not enough",
        "i am a failure",
      ],
    },
    farFromParents: {
      type: String,
      enum: ["with them", "near them", "far from them", "far from parents"],
    },
    parentComfort: {
      type: String,
      enum: [
        "comfourtable",
        "partially comfourtable",
        "partially uncomfourtable",
        "uncomfourtable",
      ],
    },
    panicAttcks: {
      type: String,
      enum: ["none", "twice a month", "twice a week", "4+times a week"],
    },
    yourTime: {
      type: String,
      enum: [
        "no need",
        "i take time regularly",
        "i take time occationally",
        "i never get time",
      ],
    },

    insecure: {
      type: [
        {
          type: String,
          enum: ["lean", "fat", "dark", "confident"],
          unique: true,
        },
      ],
    },

    pressure: {
      type: [
        {
          type: String,
          enum: [
            "work pressure",
            "family pressure",
            "self pressure",
            "no pressure",
          ],
          unique: true,
        },
      ],
    },
    lonely: {
      type: String,
      enum: ["yes need people", "yes need one person", "can't find", "no"],
    },

    desiers: {
      type: [
        {
          type: String,
          enum: ["love", "lust", "money", "spritual"],
          unique: true,
        },
      ],
    },
    friends: {
      type: String,
      enum: ["amazing", "good", "bad", "absent"],
    },
    expressive: {
      type: [
        {
          type: String,
          enum: [
            "very comfourtable",
            "partially comfourtable",
            "uncomfourtabel",
            "uncomfourtable",
          ],
          unique: true,
        },
      ],
    },
    success: {
      type: [
        {
          type: String,
          enum: ["career", "relaionship", "money", "sprituality"],
          unique: true,
        },
      ],
    },
    god: {
      type: String,
      enum: ["yes religious", "yes ", "no", "athest"],
    },
    activity: {
      type: String,
      enum: ["none", "low", "modrate", "high"],
    },
    food: {
      type: String,
      enum: [
        "packaged",
        "no vegitables",
        "rice and wheat",
        "vegitables and pulses",
      ],
    },
    screentime: {
      type: Number,
      enum: [21, 15, 8, 4],
    },
    junk: {
      type: String,
      enum: ["regularly", "once a month", "twice in 3 month", "rarely"],
    },
    clumsy: {
      type: String,
      enum: ["yes a lot", "yes sometimes", "rarely", "never"],
    },
    sleepTime: {
      type: Number,
    },
    sleepHours: {
      type: Number,
    },
    meals: {
      type: Number,
    },
    energyLevel: {
      type: String,
      enum: ["hyper active", "active", "lame", "low"],
    },
    medicalCondition: {
      type: String,
    },
    exerciseStyle: {
      type: String,
      enum: ["yoga", "hit", "cardio", "not sure"],
    },
  },
  { timestamps: true }
);

const questioneir = mongoose.model("Ques", parameters);

export default questioneir;
