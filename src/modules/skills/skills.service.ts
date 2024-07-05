import { skills } from "./skills.model";

const upsertSkillsService = async (body: any) => {
  const info = await skills.findOne({ role: "owner" });

  let result;
  if (!info) {
    result = await skills.create(body);
  } else {
    result = await skills.findOneAndUpdate({ role: "owner" }, body, {
      new: true,
      upsert: true,
    });
  }

  return result;
};

const getSkillsService = async () => {
  const result = await skills.find({ role: "owner" });
  return result;
};

export const skillsServices = {
  upsertSkillsService,
  getSkillsService,
};
