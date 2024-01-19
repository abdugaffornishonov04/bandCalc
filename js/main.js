// let form = document.querySelector( '.main-form' );

// form.addEventListener( 'submit', function ( e ) {
//   e.preventDefault();

//   let listeningValue = document.querySelector( '.l-input' ).value;
//   let readingValue = document.querySelector( '.r-input' ).value;
//   let writingValue = document.querySelector( '.w-input' ).value;
//   let speakingValue = document.querySelector( '.s-input' ).value;

//   let listeningIg = document.querySelector( ".listening-ig" );
//   let readingIg = document.querySelector( ".reading-ig" );
//   let writingIg = document.querySelector( ".writing-ig" );
//   let speakingIg = document.querySelector( ".speaking-ig" );

//   console.log( 'Listening:', listeningValue );
//   console.log( 'Reading:', readingValue );
//   console.log( 'Writing:', writingValue );
//   console.log( 'Speaking:', speakingValue );
// } );

let form = document.querySelector( '.main-form' );

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

  console.log( 'Listening:', listeningValue );
  console.log( 'Reading:', readingValue );
  console.log( 'Writing:', writingValue );
  console.log( 'Speaking:', speakingValue );
} );
