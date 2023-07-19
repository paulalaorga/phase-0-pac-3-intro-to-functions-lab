function shout(string) {
    return string;
    }
    "Hello!".toUpperCase(); // 'HELLO!'
    function shout(string) {
        return string.toUpperCase();
      }
function whisper(string) {
        return string;
        }
        "Hello!".toLowerCase(); // 'hello!'
        function whisper(string) {
            return string.toLowerCase();
          }
function logShout(Hello) {
    console.log("Hello".toUpperCase());
    } 
    function logShout(Hello) {
        console.log("Hello".toUpperCase());
    

    }
function logWhisper(Hello) {
        console.log("Hello".toLowerCase());
        } 
       function logWhisper(Hello) {
            console.log("Hello".toLowerCase());
        
    
        }
function sayHiToHeadphonedRoommate(string){ //const string = "Hello!";
            let greeting;
            if (string === string.toUpperCase()){
              greeting = 'YES INDEED!';
            }
            else if (string === string.toLowerCase()){
              greeting = 'I can\'t hear you!';
            }
            else if (string === 'Let\'s have dinner together!'){
              greeting = 'I would love to!'
            }
            return greeting;
            }
            sayHiToHeadphonedRoommate("Let's have dinner together!");