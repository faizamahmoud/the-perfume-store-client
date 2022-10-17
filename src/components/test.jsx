<section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
      <form onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://imgix.ranker.com/user_node_img/50053/1001040190/original/1-freestyle-list-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                
              </MDBCardBody>
            </MDBCard>

            {/* 
                        type="text"
                        value={editForm.username}
                        name="username"
                        placeholder="username"
                        onChange={handleChange}
                    /> */}
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Faiza</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>username</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Fai_Tai23</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">faiza.mahmoud@gmail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>password</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">*******</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
               
                <div className="d-flex justify-content-center mb-20">
                  <MDBBtn>Update Profile</MDBBtn>
                  <MDBBtn outline className="ms-1 delete"  onClick={deleteUser}>Delete Profile</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

           

            
          </MDBCol>
        </MDBRow>
        </form>
      </MDBContainer>
    </section>