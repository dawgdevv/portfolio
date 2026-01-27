import { motion } from "framer-motion";

export default function Dock({ items, className }) {
    return (
        <div
            className={`flex h-auto flex-wrap justify-center items-center gap-3 bg-white dark:bg-zinc-900 border-4 border-white hover:border-black shadow-neo px-4 py-3 z-50 ${className}`}
        >
            {items.map((item, index) => (
                <DockIcon key={index} item={item} />
            ))}
        </div>
    );
}

function DockIcon({ item }) {
    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex justify-center items-center cursor-pointer group relative"
            onClick={
                item.action ? item.action : () => window.open(item.href, "_blank")
            }
        >
            <div className="w-10 h-10 p-2 bg-gray-100 dark:bg-zinc-800 hover:text-white border-2 border-white hover:border-black shadow-neo-sm flex items-center justify-center transition-colors">
                {item.icon}
            </div>

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-2 py-1 uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border-2 border-white shadow-neo-sm">
                {item.label}
            </span>
        </motion.div>
    );
}
