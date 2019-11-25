recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {

	var list = data.files;
	
	for (let i = 0;  i < data.subDirs.length; i++) 
		{
		if (dirName != undefined && data.subDirs[i].dirName === dirName) {
		list = listFiles(data.subDirs[i]);
		break;
		}
		else {
		list = list.concat(listFiles(data.subDirs[i]));	
		}		
	}	
	return list;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
										  1, 2, 3, 4, 5, 6,  7,   8, 9, 10, 11
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {

	if ( n <= 1) {
	return n};
	
	return fibonacci(n - 2) + fibonacci(n - 1 ); 
  },
};
