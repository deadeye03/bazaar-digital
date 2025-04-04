import NeonIsometricMaze from "../sub/neon-isometric-maze";
import Features from "./Feature";


export default function Special() {
    return (
        <main className="relative w-full h-screen overflow-hidden bg-black">
            <div className="absolute inset-0 top-0 left-0 bg-[#030014]/80" >
                <Features />
            </div>
            <NeonIsometricMaze />
        </main>
    )
}

