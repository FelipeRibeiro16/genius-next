import React, { useEffect, useState } from 'react'
import * as S from './styled'

type props = {
  selected: boolean
}

const Home: React.FC = () => {
  const [selected, setSelected] = useState([])
  const [score, setScore] = useState(0)
  const [order, setOrder] = useState([])
  const [clickedOrder, setClickedOrder] = useState([])
  const [shuffletime, setShuffletime] = useState(true)
  const [playerTime, setPlayerTime] = useState(false)
  const [alert, setAlert] = useState('')

  const playGame = () => {
    setSelected([])
    setOrder([])
    setClickedOrder([])
    setScore(0)
    nextLevel()
  }

  const nextLevel = () => {
    setScore(newScore => newScore + 1)
    setShuffletime(true)
    shuffleOrder()
  }

  const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    setOrder(oldOrder => [...oldOrder, colorOrder])
  }

  useEffect(() => {
    setPlayerTime(() => {
      return false
    })
    for (let i in order) {
      let elementColor = order[i]
      lightColor(elementColor, Number(i) + 1)
    }
  }, [order])

  useEffect(() => {
    if (playerTime) {
      setShuffletime(() => {
        return false
      })
    }
  }, [playerTime])

  const lightColor = (element: number, number: number) => {
    number *= 500
    setTimeout(() => {
      setSelected(createColorElement(element))
    }, number - 250)
    setTimeout(() => {
      setSelected([])
      if (number / 500 == order.length) {
        setPlayerTime(() => {
          return true
        })
        setAlert(() => {
          return 'Sua vez'
        })
      }
    }, number)
  }

  const click = (color: number) => {
    if (playerTime) {
      setSelected(createColorElement(color))
      setClickedOrder(newClickedOrder => [...newClickedOrder, color])
      setTimeout(() => {
        setSelected([])
      }, 250)
    }
  }
  useEffect(() => {
    if (order.length != 0) {
      let stop = 0
      for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
          stop = 1
          lose()
          break
        }
      }
      if (clickedOrder.length === order.length && stop == 0) {
        console.log('Segundo')
        setTimeout(() => {
          setAlert(() => {
            return 'Parabéns! Minha vez'
          })
          setClickedOrder(() => {
            return []
          })
          nextLevel()
        }, 500)
      }
    }
  }, [clickedOrder])

  const lose = () => {
    console.log('Primeiro')
    setAlert(() => {
      return 'Você perdeu :('
    })
    setPlayerTime(() => {
      return false
    })
    setShuffletime(() => {
      return false
    })
    setOrder(() => {
      return []
    })
  }

  const createColorElement = (element: number) => {
    if (element === 0) {
      return [true, false, false, false]
    } else if (element === 1) {
      return [false, true, false, false]
    } else if (element === 2) {
      return [false, false, true, false]
    } else if (element === 3) {
      return [false, false, false, true]
    }
  }
  return (
    <S.GameContainer>
      <S.Menu>
        <S.Button onClick={() => playGame()}>
          <span>Novo jogo</span>
        </S.Button>
        <S.Score>Rodada atual :{score}</S.Score>
        <S.Alert>{alert}</S.Alert>
      </S.Menu>
      <S.Genius>
        <S.Blue selected={selected[0]} onClick={() => click(0)} />
        <S.Yellow selected={selected[1]} onClick={() => click(1)} />
        <S.Red selected={selected[2]} onClick={() => click(2)} />
        <S.Green selected={selected[3]} onClick={() => click(3)} />
      </S.Genius>
    </S.GameContainer>
  )
}

export default Home
