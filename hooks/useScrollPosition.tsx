'use client'
import React, { useState, useEffect } from 'react'

export const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0)

	useEffect(() => {
		const updatePosition = () => {
			// @ts-ignore
			setScrollPosition(window.pageYOffset)
		}
		// @ts-ignore
		window.addEventListener('scroll', updatePosition)
		updatePosition()
		// @ts-ignore
		return () => window.removeEventListener('scroll', updatePosition)
	}, [])

	return scrollPosition
}
