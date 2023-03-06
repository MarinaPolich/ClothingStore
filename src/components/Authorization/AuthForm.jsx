import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const AuthForm = () => {
  const [state, setState] = useState(1);
  if (state === 1) return <LoginForm goToReg={() => setState(2)} />;
  return <RegisterForm goToLog={() => setState(1)} />;
};
