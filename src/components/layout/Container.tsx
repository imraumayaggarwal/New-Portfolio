export default function Container({
    children
}: {
    children : React.ReactNode;
    className?: string;
}) {
    return (
        <div className="max-w-7xl px-4 mx-auto">
            {children}
        </div>
    );
}