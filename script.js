document.getElementById('checkButton').addEventListener('click', function() {
    // Get input values
    const word1 = document.getElementById('word1').value.trim();
    const word2 = document.getElementById('word2').value.trim();
    
    // Input validation
    if (!word1 || !word2) {
        document.getElementById('result').textContent = 'Please enter both words.';
        return;
    }
    
    // Check if words are anagrams
    function areAnagrams(str1, str2) {
        const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '');
        const sorted = str => normalize(str).split('').sort().join('');
        return sorted(str1) === sorted(str2);
    }
    
    if (areAnagrams(word1, word2)) {
        document.getElementById('result').textContent = 'The words are anagrams!';
    } else {
        document.getElementById('result').textContent = 'The words are not anagrams.';
    }
});
