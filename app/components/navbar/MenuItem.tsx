'use client';

interface IMenuItemsProps {
    onClick: () => void;
    label: string
}

const MenuItem = (props: IMenuItemsProps) => {
    const { onClick, label } = props;

    return (
        <div
            onClick={onClick}
            className="
                px-4
                py-3
                hover:bg-neutral-100
                transition
                font-semibold
            "
        >
            {label}
        </div>
    )
}

export default MenuItem;
