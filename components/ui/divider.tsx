'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Howl } from 'howler'

type AudioItem = {
  soundSrc: string // src
  imageSrc: string
  altText: string
  soundRef: React.RefObject<Howl | null>
}

const Divider: React.FC = () => {
  const audioList: AudioItem[] = [
    {
      soundSrc: '/sounds/wind.wav',
      imageSrc: '/svg/wind.svg',
      altText: 'wind',
      soundRef: useRef<Howl | null>(null),
    },
    {
      soundSrc: '/sounds/rain.mp3',
      imageSrc: '/svg/rain.svg',
      altText: 'rain',
      soundRef: useRef<Howl | null>(null),
    },
    {
      soundSrc: '/sounds/forest.mp3',
      imageSrc: '/svg/tree-icon.svg',
      altText: 'forest',
      soundRef: useRef<Howl | null>(null),
    },
    {
      soundSrc: '/sounds/ocean.mp3',
      imageSrc: '/svg/ocean.svg',
      altText: 'ocean',
      soundRef: useRef<Howl | null>(null),
    },
    {
      soundSrc: '/sounds/fire.mp3',
      imageSrc: '/svg/fire.svg',
      altText: 'fire',
      soundRef: useRef<Howl | null>(null),
    },
    {
      soundSrc: '/sounds/thunder.mp3',
      imageSrc: '/svg/thunder.svg',
      altText: 'thunder',
      soundRef: useRef<Howl | null>(null),
    },
    {
      soundSrc: '/sounds/spaceship.mp3',
      imageSrc: '/svg/spaceship.svg',
      altText: 'spaceship',
      soundRef: useRef<Howl | null>(null),
    },
    {
      soundSrc: '/sounds/pub.mp3',
      imageSrc: '/svg/pub.svg',
      altText: 'pub',
      soundRef: useRef<Howl | null>(null),
    },
  ]

  // Компонент для одного аудіо елемента
  const SoundComponent: React.FC<{
    audioItem: AudioItem
  }> = ({ audioItem }) => {
    const [isPlaying, setIsPlaying] = useState(false) // checkbox
    const [loudness, setLoudness] = useState(50)

    const handlePlayPause = () => {
      if (!audioItem.soundRef.current) {
        audioItem.soundRef.current = new Howl({
          src: audioItem.soundSrc,
          loop: true,
          html5: true,
          volume: loudness / 100,
        })
      }

      if (isPlaying) {
        audioItem.soundRef.current.pause()
      } else {
        audioItem.soundRef.current.play()
      }

      setIsPlaying(!isPlaying)
    }

    const handleVolumeChange = (value: string) => {
      setLoudness(parseFloat(value))
      if (audioItem.soundRef.current) {
        const volume = parseFloat(value) / 100
        audioItem.soundRef.current.volume(volume)
      }
    }

    return (
      <div className="card flex transform flex-col items-center space-y-4 rounded-lg bg-sky-100 p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
        <label className="group relative">
          <input
            type="checkbox"
            checked={isPlaying}
            onChange={handlePlayPause}
            className="hidden"
          />
          <Image
            src={audioItem.imageSrc}
            alt={audioItem.altText}
            width={150}
            height={150}
            className={`rounded-full border-4 ${
              isPlaying ? 'border-green-400 brightness-50' : 'border-gray-300'
            } transition-transform duration-300 group-hover:scale-110`}
          />
        </label>
        <input
          type="range"
          min={0}
          max={100}
          value={loudness}
          className="range w-48 accent-pink-500"
          onChange={(e) => {
            handleVolumeChange(e.target.value)
          }}
        />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {audioList.map((audioItem, index) => (
          <SoundComponent key={index} audioItem={audioItem} />
        ))}
      </div>
    </div>
  )
}

export default Divider
