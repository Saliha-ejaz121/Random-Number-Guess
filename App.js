import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [getText, setText] = useState("0")
  const [getmsg , setmsg] = useState("")
  const [chances , setChances] = useState(5)
  const [score , setscore] = useState(0)
  const [getRandom, setRandom] = useState(Number.parseInt(Math.random() * 10));
  const [totalattempts , settotalattempts ] = useState(0)
  const [totalwrongattempts , settotalwrongattempts ] = useState(0)
  const [totalcorrectattempts , settotalcorrectattempts ] = useState(0)
  const [getRound , setRound ] = useState(1);
  const reset=()=>{
    setmsg("")
    setText(0)
    setChances(5)
    setRound(1)
    setscore(0)
    settotalattempts(0)
    settotalcorrectattempts(0)
    settotalwrongattempts(0)
    setRandom(Number.parseInt(Math.random() * 10))
  }
  const nextRound = (score)=>{
  
    setRound(getRound+1)
    setscore(score)
  
    alert(score)
    if(getRound>=3){
      alert("Rounds finished !\n total attempts : "+totalattempts+
      "\n wrong attempts: "+totalwrongattempts+"\n correct attempts : "+
      totalcorrectattempts+"\n your score : "+score+"\n round number : "+getRound)
      reset()
    }
    else{
      alert("Congratulations! welcome to next level")
      
    }
   
  }
  const showScore = () => {
    alert("Your Score :"+score+"\n total attempts : "+totalattempts+"\n wrong attempts: "+totalwrongattempts+"\n correct attempts : "+totalcorrectattempts)
  }
  const buttonClick = (txt) => {
    settotalattempts(totalattempts+1)
    // alert(txt)
    setText(txt)
    checkMatch(txt)
  }
  const checkMatch= (txt) =>{
    if(txt == getRandom){
      setmsg("correct!")
      settotalcorrectattempts(totalcorrectattempts+1)
      s= score+10
      setscore(s)
      nextRound(s)
      setChances(5)
      setRandom(Number.parseInt(Math.random() * 10))
    }
    else{
      setmsg("wrong guess!")
      settotalwrongattempts(totalwrongattempts+1)
      setChances(chances-1)
      
    }
    if(chances<1){
      alert("you ran out of chances!\n total attempts : "+totalattempts+"\n wrong attempts: "+totalwrongattempts+"\n correct attempts : "+totalcorrectattempts)
      reset()
    }
  }
  const resetGame = () => {
    reset()
  }
  return (
   
    <View style={styles.container}>
      <Text style={{ fontSize: 30 , color : 'rgb(49, 79, 89)' , backgroundColor : 'rgb(166, 224, 245)', padding : 10}} >Guess a Number!</Text>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 50 , paddingTop : 20}}>{getText}</Text>
      <Text style={{ fontSize: 20 , paddingTop : 30 , color : 'green'}}>{getmsg}</Text>
<Text style={{ fontSize: 20 , paddingTop : 20 , color : 'green'}}>score {score}</Text>
<View style= { {flexDirection : 'row' , marginHorizontal : 10 }}>
      <Text style={{ fontSize: 20 , paddingTop : 20 , color : 'rgb(255, 0, 102)', }}>Chances left : {chances}</Text>
      <Text style={{ fontSize: 20 , paddingTop : 20 , color : 'rgb(54, 152, 201)',  marginLeft : 50}}>Round : {getRound}</Text>
      </View>
  <View style={{paddingTop : 20}}>
      <Button style ={{ width: '10', margin : 10}} color="red" title ="reset" onPress={resetGame.bind(this)}></Button></View>
      
     
      <View style= {styles.numericpad }>
      <View style= { {flexDirection : 'row' , margin : 10}}>
      <View  style={{width: 60 }} >
      <Button  title ="1" onPress={buttonClick.bind(this, 1)}></Button>
      </View>
      <View  style={{width: 60 , marginLeft : 45}} >
      <Button  title ="2" onPress={buttonClick.bind(this, 2)}></Button>
      </View>
      <View  style={{width: 60 , marginLeft : 45}} >
      <Button  title ="3" onPress={buttonClick.bind(this, 3)}></Button>
      </View>
      </View>
      <View style= { {flexDirection : 'row', margin : 10}}>
      <View  style={{width: 60 }} >
      <Button  title ="4" onPress={buttonClick.bind(this, 4)}></Button>
      </View>
      <View  style={{width: 60  , marginLeft : 45}} >
      <Button  title ="5" onPress={buttonClick.bind(this, 5)}></Button>
      </View>
      <View  style={{width: 60  , marginLeft : 45}} >
      <Button  title ="6" onPress={buttonClick.bind(this, 6)}></Button>
      </View>
      </View>
      <View style= {{flexDirection : 'row', margin : 10}}>
      <View  style={{width: 60 }} >
      <Button  title ="7" onPress={buttonClick.bind(this, 7)}></Button>
      </View>
      <View  style={{width: 60  , marginLeft : 45}} >
      <Button  title ="8" onPress={buttonClick.bind(this, 8)}></Button>
      </View>
      <View  style={{width: 60  , marginLeft : 45}} >
      <Button  title ="9" onPress={buttonClick.bind(this, 9)}></Button>
      </View>
      </View>
      <View style= { { margin : 10 , width : 60 , alignSelf : 'center'}}>
      <Button title ="0" onPress={buttonClick.bind(this, 0)}></Button>
     
      </View>
      </View>
      
      
     
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  row1:{
    flexDirection : 'row',
     alignItems : 'center' ,
     
     justifyContent : 'space-between'
  },
  container: {
    flex: 1,
    paddingTop : 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    flex: 1,
    fontSize : 30,
    fontWeight : 'bold',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop : 50
  },
  numericpad : {
    paddingTop : 50,
    flex : 1,
  },
  
  
});
