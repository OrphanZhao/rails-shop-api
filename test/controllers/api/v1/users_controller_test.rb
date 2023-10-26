require "test_helper"

class Api::V1::UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
    @user2 = users(:two)
  end

  test "index_success: should show users" do
    get api_v1_users_path, 
      # 新增
      headers: { Authorization: JsonWebToken.encode(user_id: @user.id) },
      as: :json
    assert_response 200
  end

  # 未修改代码

  test "update_success: should update user" do
    put api_v1_user_path(@user), 
      params: {user:{email: 'test1@test.com', password: '123456'}},
      # 新增
      headers: { Authorization: JsonWebToken.encode(user_id: @user.id) },
      as: :json
  
    assert_response 202
  end

  test "destroy_success: should destroy user" do
    # 验证 User.count 变化 -1
    assert_difference('User.count', -1) do
      delete api_v1_user_path(@user2), 
        # 新增
        headers: { Authorization: JsonWebToken.encode(user_id: @user.id) },
        as: :json
    end

    assert_response 204
  end

  test "index_forbidden: should forbiden show users cause not admin" do
    get api_v1_users_path, 
    # 新增
    headers: { Authorization: JsonWebToken.encode(user_id: @user2.id) },
    as: :json
    assert_response 403
  end

  test "update_forbidden: should forbiden update user cause not admin" do
    put api_v1_user_path(@user), 
    params: {user:{email: 'test1@test.com', password: '123456'}},
    headers: { Authorization: JsonWebToken.encode(user_id: @user2.id) },
    as: :json

    assert_response 403
  end

  test "destroy_forbidden: should forbiden destroy_ user cause not admin" do
    delete api_v1_user_path(@user), 
    headers: { Authorization: JsonWebToken.encode(user_id: @user2.id) },
    as: :json

    assert_response 403
  end
end