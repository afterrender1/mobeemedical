"use client"
import { ArrowUp } from 'lucide-react'
import React from 'react'


const MoveToTop = () => {
  return (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 cursor-pointer h-14 bg-[#066BAA] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#055996] transition z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
  )
}

export default MoveToTop