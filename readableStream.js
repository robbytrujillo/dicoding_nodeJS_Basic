// readable stream method creatReadStrean() core module fs

const fs = requier('fs');

const readableStream = fs.creartReadStream('./article.txt', {
    higjWaterMark: 10
});

readableStream('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        // catch the error whern the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    console.log('Done');
});