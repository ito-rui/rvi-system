import isValidKey from "../../../utils/isKey";

const spaces = {
	px: "1px",
	0: "0",
	0.5: "0.125rem", // 2px
	1: "0.25rem", // 4px
	1.5: "0.375rem", // 6px
	2: "0.5rem", // 8px
	2.5: "0.625rem", // 10px
	3: "0.75rem", // 12px
	3.5: "0.875rem", // 14px
	4: "1rem", // 16px
	5: "1.25rem", // 20px
	6: "1.5rem", // 24px
	7: "1.75rem", // 28px
	8: "2rem", // 32px
	9: "2.25rem", // 36px
	10: "2.5rem", // 40px
} as const;

export type SpacesKey = keyof typeof spaces;

export type SpacesValue = (typeof spaces)[SpacesKey];

export const isValidSpacesKey = (value: SpacesKey | string | number): value is SpacesKey => {
	return isValidKey<SpacesKey>(value, spaces);
};

export default spaces;
