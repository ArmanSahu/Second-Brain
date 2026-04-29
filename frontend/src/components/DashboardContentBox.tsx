
interface Box{
    text: string;
    onClick: () => void
}

export function Box({text,onClick}: Box) {
    return <div onClick={onClick} className="px-4 py-1 rounded-3xl border active:translate-y-0.5 transition-transform duration-400 ease-in-out  text-sm hover:bg-blue-600 hover:text-white cursor-pointer bg-white">
        {text}
    </div>
}