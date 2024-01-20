let form = document.querySelector( '.main-form' );
let bandScoreWindow = document.querySelector(".bandscore-window-none");


form.addEventListener( 'submit', function ( e ) {
  e.preventDefault();

  let listeningValue = document.querySelector( '.l-input' ).value;
  let readingValue = document.querySelector( '.r-input' ).value;
  let writingValue = document.querySelector( '.w-input' ).value;
  let speakingValue = document.querySelector( '.s-input' ).value;

  let listeningIg = document.querySelector( ".listening-ig" );
  let readingIg = document.querySelector( ".reading-ig" );
  let writingIg = document.querySelector( ".writing-ig" );
  let speakingIg = document.querySelector( ".speaking-ig" );


  if ( listeningValue.trim() === "" ) {
    listeningIg.classList.add( "error-inputs" );
  }

  if ( readingValue.trim() === "" ) {
    readingIg.classList.add( "error-inputs" );
  }

  if ( writingValue.trim() === "" ) {
    writingIg.classList.add( "error-inputs" );
  }

  if ( speakingValue.trim() === "" ) {
    speakingIg.classList.add( "error-inputs" );
  }

  if ( listeningValue.trim() === "" || readingValue.trim() === "" || writingValue.trim() === "" || speakingValue.trim() === "" ) {
    console.log( "Please fill in all the required inputs." );
    return; 
  }

  // console.log( 'Listening:', listeningValue );
  // console.log( 'Reading:', readingValue );
  // console.log( 'Writing:', writingValue );
  // console.log( 'Speaking:', speakingValue );

  function roundToNearestHalf( number ) {
    return Math.round( number * 2 ) / 2;
  }
  

  let overallScore = ( +listeningValue + +readingValue + +writingValue + +speakingValue ) / 4;
  let totalScore = roundToNearestHalf( overallScore )

  setTimeout(() => {
    bandScoreWindow.classList.add( "bandscore-window" );

    let bandscoreWindowP = document.querySelector( ".bandscore-window p" );
    let bandscoreWindowButton = document.querySelector( ".bandscore-window button" );

    bandscoreWindowP.textContent = totalScore;
  }, 500)
} );  
