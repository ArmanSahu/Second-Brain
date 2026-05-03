import { useNavigate } from "react-router-dom"
import { BrainIcon } from "../Icons/BrainIcon"


export const About = () => {
    const navigate = useNavigate();
    return <div className="min-h-screen bg-white-100  text-gray-800 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold flex justify-center items-center gap-2">
            <BrainIcon />
            Your Second Brain
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Store, organize, and share everything you learn on the internet.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-3">What is Second Brain?</h2>
          <p className="text-gray-600 leading-relaxed">
            Second Brain is a personal knowledge hub where you can save useful
            content from across the internet — like YouTube videos, tweets,
            articles, and more — and revisit them anytime. Instead of losing
            valuable information in bookmarks or social feeds, you keep
            everything organized in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-xl shadow p-5 text-center">
            
            <h3 className="font-semibold text-lg">Save Links</h3>
            <p className="text-gray-500 text-sm mt-1">
              Store useful content from YouTube, Twitter, Instagram, and more.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h3 className="font-semibold text-lg">Organize Knowledge</h3>
            <p className="text-gray-500 text-sm mt-1">
              Keep your learning structured and easy to revisit anytime.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-5 text-center">
           
            <h3 className="font-semibold text-lg">Share Your Brain</h3>
            <p className="text-gray-500 text-sm mt-1">
              Generate a sharable link and let others explore your collection.
            </p>
          </div>

        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">How it works</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Add links from any platform</li>
            <li>Organize them by type (videos, tweets, docs, etc.)</li>
            <li>Access them anytime from your dashboard</li>
            <li>Share your entire collection with a single link</li>
          </ul>
        </div>
        <div className="text-center">
          <button onClick={() => navigate("/signup")} className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-lg font-medium transition">
            Start Building Your Second Brain
          </button>
        </div>

      </div>
    </div>
} 