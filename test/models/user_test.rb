require "test_helper"

class UserTest < ActiveSupport::TestCase
  # 合法的参数
  test "valid: user with all valid things" do
    user = User.new(email: 'user0@demo.com', password_digest: '123456', role: 1)
    assert user.valid?
  end

  # 不符合规格 email
  test 'invalid: user with invalid email' do
    user = User.new(email: 'test', password_digest:'123456', role:1)
    assert_not user.valid?
  end

  # 重复的邮箱
  test 'invalid: user with taken email' do
    user = User.new(email: users(:one).email, password_digest:'123456', role:1)
    assert_not user.valid?
  end

  # 使用不合法的 password_digest
  test 'invalid: user with invalid password_digest' do
    user = User.new(email: 'test1@test.cn', password_digest:'', role:1)
    assert_not user.valid?
  end

   # 使用不合法的 role
  test 'invalid: user with invalid role' do
    user = User.new(email: 'test2@test.cn', password_digest:'123456', role:5)
    assert_not user.valid?
  end

  # 使用合法的 password
  test 'valid: user with valid password' do
    user = User.new(email: 'test3@test.cn', password:'123456', role:1)
    assert user.valid?
  end

  # 使用非法的 password
  test 'invalid: user with invalid password' do
    user = User.new(email: 'test4@test.cn', password:'', role:1)
    assert_not user.valid?
  end
end
