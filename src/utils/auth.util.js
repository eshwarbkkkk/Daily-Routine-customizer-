const sessionId = new Map();

function setUser(id, user) {
  sessionId.set(id, user);
}

function getUser(id) {
  return sessionId.get(id);
}

export { setUser, getUser };
