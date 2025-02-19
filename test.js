import test from 'ava'
import sefaz from '.'

test('TypeError', async t => {
	t.plan(6)

	await t.throwsAsync(sefaz(123), {
		instanceOf: TypeError,
		message: 'Expected a string for url, got number'
	})

	await t.throwsAsync(sefaz('string', 'base64string'), {
		instanceOf: TypeError,
		message: 'Expected a Buffer for certificate, got string'
	})

	await t.throwsAsync(sefaz('url', Buffer.from('cert'), 123), {
		instanceOf: TypeError,
		message: 'Expected a string for password, got number'
	})

	await t.throwsAsync(sefaz('url', Buffer.from('cert'), 'password', 123), {
		instanceOf: TypeError,
		message: 'Expected a string for methodName, got number'
	})

	await t.throwsAsync(sefaz('url', Buffer.from('cert'), 'password', 'methodName', 123), {
		instanceOf: TypeError,
		message: 'Expected a object for message, got number'
	})

	await t.throwsAsync(sefaz('url', Buffer.from('cert'), 'password', 'methodName', { $xml: 'message' }, [1123]), {
		instanceOf: TypeError,
		message: 'Expected a string for header, got number'
	})
})
