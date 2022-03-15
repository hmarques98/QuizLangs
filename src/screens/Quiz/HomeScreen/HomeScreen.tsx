import React, {useState} from 'react'
import {Dimensions, Text, View} from 'react-native'
import Button from '../../../components/Button'
import TipButton from '../../../components/TipButton'
import {colors} from '../../../config/colors'

const {width} = Dimensions.get('screen')

const quizes = [
  {
    id: 1,
    en: 'The house is small',
    de: 'Das Hause ist klein',
    wordDe: 'Hause',
    wordEn: 'house',
    tips: ['Hause', 'folgen', 'Schaf', 'Bereiden'],
  },
  {
    id: 2,
    en: 'The house is small',
    de: 'Das Hause ist klein',
    wordDe: 'Das',
    wordEn: 'The',
    tips: ['Das', 'folgen', 'Schaf', 'Bereiden'],
  },
  {
    id: 3,
    en: 'The house is small',
    de: 'Das Hause ist klein',
    wordDe: 'ist',
    wordEn: 'is',
    tips: ['Hause', 'folgen', 'ist', 'Das'],
  },
  {
    id: 4,
    en: 'The house is small',
    de: 'Das Hause ist klein',
    wordDe: 'klein',
    wordEn: 'small',
    tips: ['klein', 'Das', 'ist', 'Bereiden'],
  },
  {
    id: 5,
    en: 'The house is not small',
    de: 'Das Hause ist nicht klein',
    wordDe: 'nicht',
    wordEn: 'not',
    tips: ['nicht', 'Das', 'Schaf', 'Bereiden'],
  },
]

const HomeScreen = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [correctTipSelected, setCorrectTipSelected] = useState('')

  const quiz = quizes[currentQuiz] ?? quizes[0]

  const handleTipButtonWhenSelectedOrNot = () =>
    correctTipSelected.toLowerCase() === quiz.wordDe.toLowerCase() ? (
      <TipButton label={quiz.wordDe} />
    ) : (
      Array.from({length: quiz.wordDe.length + 2}).map(() => '_')
    )

  const handleOnPressTip = (tiPressed: string) => {
    if (quiz.wordDe.toLowerCase() === tiPressed.toLowerCase()) {
      setCorrectTipSelected(tiPressed)
    }
  }

  const customTextEn = () =>
    quiz.en.split(' ').map(word => (
      <Text
        key={word}
        style={[
          {
            color: colors.white,
            fontSize: 26,
            fontWeight: 'bold',
            marginHorizontal: 4,
          },
          word.toLowerCase() === quiz.wordEn.toLowerCase() && {
            textDecorationLine: 'underline',
          },
        ]}
      >
        {word}
      </Text>
    ))

  const customTextDe = () =>
    quiz.de.split(' ').map(word => (
      <Text
        key={word}
        style={{
          color: colors.white,
          fontSize: 26,
          fontWeight: 'bold',
          marginHorizontal: 4,
        }}
      >
        {word.toLowerCase() === quiz.wordDe.toLowerCase()
          ? handleTipButtonWhenSelectedOrNot()
          : word}
      </Text>
    ))

  return (
    <>
      <View style={{marginTop: 38}}>
        <Text style={{color: colors.white}}>Fill in the missing word</Text>
      </View>
      <View
        style={{
          marginTop: 38,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {customTextEn()}
      </View>
      <View
        style={{
          marginTop: 38,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: correctTipSelected ? 0 : 14,
        }}
      >
        {customTextDe()}
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 38,
          justifyContent: 'space-evenly',
          width: width * 0.7,
        }}
      >
        {quiz.tips.map(tip => (
          <View style={{marginTop: 10, marginVertical: 10}} key={tip}>
            <TipButton
              label={tip}
              onPress={() => {
                handleOnPressTip(tip)
              }}
            />
          </View>
        ))}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          width: '100%',
          paddingHorizontal: 24,
        }}
      >
        <Button
          label="Continue"
          onPress={() => {
            if (correctTipSelected.length) {
              setCorrectTipSelected('')
              setCurrentQuiz(preview => preview + 1)
            }
          }}
        />
      </View>
    </>
  )
}

export default HomeScreen
