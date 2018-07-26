var Publishing = artifacts.require('./Publishing.sol');

contract('Publishing', (accounts) => {
  const [firstAccount, secondAccount] = accounts;

  it("sets an owner", async () => {
    const publishing = await Publishing.new();
    assert.equal(await publishing.owner.call(), firstAccount);
  });

  it("checks if copyright is false", async () => {
    const publishing = await Publishing.new();
    assert.equal(await publishing.checkText.call("message"), false);
  });

  it("checks if copyright is true", async () => {
    const publishing = await Publishing.new();
    publishing.saveText("message");
    assert.equal(await publishing.checkText.call("message"), true);
  });

  it("Another account cannot access contract", async () => {
    const publishing = await Publishing.new();
    let newAcccount = await publishing.checkText("message", {from: secondAccount});
    assert.equal(newAcccount, false);
  });

  it("Transfers contract ownership", async () => {
    const publishing = await Publishing.new();
    publishing.transferOwnership(secondAccount);
    assert.equal(await publishing.owner.call(), secondAccount);
  });
});