export default function Container({
    children
}: {
    children : React.ReactNode;
}) {
    return (
        <div className="max-w-6xl px-4 mx-auto">
            {children}
        </div>
    );
}