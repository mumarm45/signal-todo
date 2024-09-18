import { Signal, signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";

export interface ItemData {
    label: Signal<string>;
    completed: Signal<boolean>;
}

interface Props {
    data: ItemData
}

export const createItem = (label: string): ItemData => ({ label: signal(label), completed: signal(false) })

export const TodoItem: React.FC<Props> = ({ data: { completed, label } }) => {
    useSignals(); // read docs for @preact/signals-react to understand what this does
    return (
        <>
            <input type="checkbox" checked={completed.value} onChange={e => { completed.value = e.target.checked }} />
            <input type="text" value={label.value} onChange={e => { label.value = e.target.value }} />
        </>
    )
}