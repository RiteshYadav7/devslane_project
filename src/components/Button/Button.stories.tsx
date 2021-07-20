import Button from "./Button";
import "../../index.css";
import { HiLockClosed, HiLogin, HiMoon } from "react-icons/hi";

const icons = { HiLockClosed, HiLogin, HiMoon };

export default {
    title: "Button",
    component: Button,
    argTypes: {
        theme: {
            control: {type: "select"},
        },
        Icon: {
            options: Object.keys(icons),
            mapping: icons,
            control: {
                type: "select",
                labels: {
                    HiLockClosed: "closed lock",
                    HiLogin: "Login Icon",
                    HiMoon: "Moon",
                },
            },
        },
    },
};

export const Main = (args: any) => <Button {...args}></Button>;

Main.args = {
    children: "Sign in",
    className: "",
    disabled: false,
    type: "submit",
};