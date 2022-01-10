export const Validate_Email = (value) => (/^\S+@\S+\.\S+$/.test(value));
export const Validate_Min= (min , value ) => ( value.length >= min )