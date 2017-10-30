import Queue from './queue';
import Node from './node';

describe('Queue', () => {
    describe('#constructor', () => {
        const queue = new Queue();

        it('assign 0 to this.length', () => {
            expect(queue.length).to.equal(0);
        })
    });

    describe('#push', () => {
        it('should assign new node as _top of queue', () => {
            const value = 10;

            const queue = new queue();

            queue.push(value);

            expect(queue._top).to.be.an.instanceof(Node);
            expect(queue._top.value).to.equal(10);
        });

        it('should set new node as _top of queue and add new value', () => {
            const queue = new Queue();

            queue.push(50);
            queue.push(100);
            queue.push(51);
            queue.push(422);
            queue.push(55);
            queue.push(112);

            expect(queue.length).to.equal(6);
            expect(queue._top.value).to.equal(112);
        });

    });
});
