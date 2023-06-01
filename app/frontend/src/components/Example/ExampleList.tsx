import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "This is test language",
        value: "This is test language"
    },
    { text: "What are the population trends as set out in the Limerick 2030 strategy", value: "What are the population trends as set out in the Limerick 2030 strategy" },
    { text: "Describe the key objectives of the Limerick City and County Development Plan" , value: "Describe the key objectives of the Limerick City and County Development Plan" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
