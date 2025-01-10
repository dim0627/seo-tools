import type { FC } from "react";

type TextareaProps = React.JSX.IntrinsicElements["textarea"];
export const Textarea: FC<TextareaProps> = (props) => {
  return (
    <textarea
      {...props}
      className="block w-full rounded-lg border-0 p-2.5 text-slate-900 ring-2 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-black"
    />
  );
};
