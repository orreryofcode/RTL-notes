import { SkillsProps } from "./skills.types";

export function Skills({ skills }: SkillsProps) {
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </>
  );
}
