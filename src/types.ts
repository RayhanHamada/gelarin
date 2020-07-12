export type Args = Partial<{
  /**
   * name of arg to show in help and reference with args[name]
   */
  name: string;

  /**
   * make the arg required with `required: true`
   */
  required: boolean;

  /**
   * help description
   */
  description: string;

  /**
   * hide this arg from help
   */
  hidden: boolean;

  /**
   * instead of the user input, return a different value
   */
  parse: (input: string) => string;

  /**
   * default value if no arg input
   */
  default: string;

  /**
   * only allow input to be from a discrete set
   */
  options: string[];
}>;
