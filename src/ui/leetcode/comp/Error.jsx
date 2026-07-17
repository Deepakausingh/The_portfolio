export default function Error({ message }) {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-red-500">
                    Failed to Load
                </h2>

                <p className="mt-4 text-gray-400">
                    {message || "Something went wrong."}
                </p>
            </div>
        </div>
    );
}