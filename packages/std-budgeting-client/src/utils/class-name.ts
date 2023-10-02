export interface ClassObj {
  [key: string]: boolean;
}

export type ClassName = string | null | false | undefined;

export type ClassArray = Array<ClassDef>;

export type ClassDef = ClassName | ClassObj | ClassArray;

export const getClassName = (classes: ClassDef): string => {
  if (classes === null || classes === false || classes === undefined) {
    return "";
  }

  if (typeof classes === "string") {
    return classes;
  }

  if (Array.isArray(classes)) {
    return classes.flatMap(getClassName).filter(Boolean).join(" ");
  }

  return getClassName(
    Object.entries(classes)
      .filter(([, value]) => Boolean(value))
      .map(([key]) => String(key)),
  );
};
